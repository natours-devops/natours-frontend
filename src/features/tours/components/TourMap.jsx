import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Section = styled.section`
  position: relative;
  height: 65rem;
  margin-top: calc(0px - var(--section-rotate));
`;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default function TourMap({ locations }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!locations?.length || !containerRef.current) return;

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: 'mapbox://styles/mapbox/light-v11',
      scrollZoom: false,
    });

    const bounds = new mapboxgl.LngLatBounds();

    locations.forEach((loc) => {
      const el = document.createElement('div');
      el.style.backgroundImage = "url('/img/pin.png')";
      el.style.backgroundSize = 'cover';
      el.style.width = '32px';
      el.style.height = '40px';
      el.style.cursor = 'pointer';

      new mapboxgl.Marker({ element: el, anchor: 'bottom' })
        .setLngLat(loc.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 30 }).setHTML(
            `<p style="font-family:'Lato',sans-serif;font-size:1.4rem;padding:0.5rem">Day ${loc.day}: ${loc.description}</p>`
          )
        )
        .addTo(map);

      bounds.extend(loc.coordinates);
    });

    map.fitBounds(bounds, {
      padding: { top: 200, bottom: 150, left: 100, right: 100 },
    });

    return () => map.remove();
  }, [locations]);

  return (
    <Section>
      <MapContainer ref={containerRef} />
    </Section>
  );
}
