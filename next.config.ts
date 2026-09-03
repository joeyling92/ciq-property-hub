import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/the-iconic-pgb",
        destination: "/the-iconic-pgb.html",
        permanent: false,
      },
      {
        source: "/projects/richmond-jbcc",
        destination: "/richmond-jbcc.html",
        permanent: false,
      },
      {
        source: "/projects/calia-residences",
        destination: "/calia-residences.html",
        permanent: false,
      },
      {
        source: "/projects/rf-princess-cove-phase3",
        destination: "/rf-princess-cove-phase3.html",
        permanent: false,
      },
      {
        source: "/projects/paragon-gateway",
        destination: "/paragon-gateway.html",
        permanent: false,
      },
      {
        source: "/projects/the-address-jb",
        destination: "/the-address-jb.html",
        permanent: false,
      },
      {
        source: "/projects/ctc-skyone",
        destination: "/ctc-skyone.html",
        permanent: false,
      },
      {
        source: "/projects/gensphere",
        destination: "/gensphere.html",
        permanent: false,
      },
      {
        source: "/projects/summer-suites",
        destination: "/summer-suites.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
