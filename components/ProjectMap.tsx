"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/lib/projects";

// Projects not yet in lib/projects.ts (standalone HTML pages only)
const EXTRA_MARKERS: { name: string; lat: number; lng: number; dir: string }[] = [
  { name: "Summer Suite", lat: 1.4619400028260015, lng: 103.77023249898488, dir: "left"  },
  { name: "R&F Phase 3",  lat: 1.4609747146882395, lng: 103.77121955735394, dir: "right" },
];

// Tooltip direction per slug for projects sourced from lib/projects.ts
const SLUG_DIR: Record<string, string> = {
  "gensphere":                "left",
  "richmond-jbcc":            "bottom",
  "ctc-skyone":               "top",
  "the-address":              "right",
  "paragon-gateway":          "top",
  "calia-residences":         "left",
  "country-garden-danga-bay": "bottom",
  "the-iconic-pgb":           "top",
};

export default function ProjectMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    // Inject Leaflet CSS once
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
      document.head.appendChild(link);
    }

    // Inject label styles once
    if (!document.getElementById("project-map-styles")) {
      const style = document.createElement("style");
      style.id = "project-map-styles";
      style.textContent = `
        .proj-label {
          background: #fff;
          border: 1px solid #cbd5e1;
          border-radius: 3px;
          padding: 2px 6px;
          font-size: 11px;
          font-weight: 600;
          color: #1e293b;
          white-space: nowrap;
          box-shadow: 0 1px 4px rgba(0,0,0,0.15);
          pointer-events: none;
        }
        .proj-label::before { display: none; }
        .proj-label::after  { display: none; }
      `;
      document.head.appendChild(style);
    }

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !containerRef.current || mapRef.current) return;

      // Build combined marker list: hardcoded extras + lib projects with coordinates
      const libMarkers = projects
        .filter((p) => p.lat != null && p.lng != null)
        .map((p) => ({
          name: p.name,
          lat:  p.lat!,
          lng:  p.lng!,
          dir:  SLUG_DIR[p.slug] ?? "top",
        }));

      const ALL_MARKERS = [...EXTRA_MARKERS, ...libMarkers];

      const map = L.map(containerRef.current, {
        dragging:           false,
        scrollWheelZoom:    false,
        touchZoom:          false,
        doubleClickZoom:    false,
        boxZoom:            false,
        keyboard:           false,
        zoomControl:        false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" tabindex="-1">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const latlngs: [number, number][] = ALL_MARKERS.map((m) => [m.lat, m.lng]);

      ALL_MARKERS.forEach((marker) => {
        L.circleMarker([marker.lat, marker.lng], {
          radius:      7,
          fillColor:   "#1d4ed8",
          color:       "#ffffff",
          weight:      2,
          opacity:     1,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindTooltip(marker.name, {
            permanent:  true,
            direction:  marker.dir,
            offset:     [0, 0],
            className:  "proj-label",
          });
      });

      map.fitBounds(latlngs, { padding: [48, 48] });
      mapRef.current = map;
    };

    if ((window as any).L) {
      initMap();
    } else {
      const existing = document.getElementById("leaflet-js");
      if (existing) {
        existing.addEventListener("load", initMap);
      } else {
        const script = document.createElement("script");
        script.id = "leaflet-js";
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
        script.onload = initMap;
        document.head.appendChild(script);
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "380px", pointerEvents: "none" }}
      aria-label="Map showing CIQ area property project locations"
    />
  );
}
