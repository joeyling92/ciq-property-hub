"use client";

import { useEffect, useRef } from "react";

const PROJECTS: { name: string; lat: number; lng: number }[] = [
  { name: "Summer Suite",       lat: 1.4619400028260015, lng: 103.77023249898488 },
  { name: "R&F Phase 3",        lat: 1.4609747146882395, lng: 103.77121955735394 },
  { name: "Gensphere",          lat: 1.4602483562564297, lng: 103.76735905450104 },
  { name: "Richmond JBCC",      lat: 1.45664691322097,   lng: 103.76426808574679 },
  { name: "CTC Skyone",         lat: 1.471387226840175,  lng: 103.76413621502037 },
  { name: "The Address Pelangi",lat: 1.4831925819440923, lng: 103.76604944579364 },
  { name: "Paragon Gateway",    lat: 1.5025829203222194, lng: 103.7637780760463  },
  { name: "Calia Residences",   lat: 1.482497830631145,  lng: 103.72085996904143 },
  { name: "Danga Bay",          lat: 1.4640784625862628, lng: 103.72694993677663 },
  { name: "Iconic",             lat: 1.465623942962547,  lng: 103.77166334436811 },
];

// Tooltip direction assigned per-marker to reduce label collisions.
const TOOLTIP_DIRS = [
  "left",   // Summer Suite
  "right",  // R&F Phase 3
  "left",   // Gensphere
  "bottom", // Richmond JBCC
  "top",    // CTC Skyone
  "right",  // The Address Pelangi
  "top",    // Paragon Gateway
  "left",   // Calia Residences
  "bottom", // Danga Bay
  "top",    // Iconic
] as const;

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

      const map = L.map(containerRef.current, {
        dragging:         false,
        scrollWheelZoom:  false,
        touchZoom:        false,
        doubleClickZoom:  false,
        boxZoom:          false,
        keyboard:         false,
        zoomControl:      false,
        attributionControl: true,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" tabindex="-1">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      const latlngs: [number, number][] = PROJECTS.map((p) => [p.lat, p.lng]);

      PROJECTS.forEach((project, i) => {
        L.circleMarker([project.lat, project.lng], {
          radius:      7,
          fillColor:   "#1d4ed8",
          color:       "#ffffff",
          weight:      2,
          opacity:     1,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindTooltip(project.name, {
            permanent:  true,
            direction:  TOOLTIP_DIRS[i],
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
