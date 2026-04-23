// Passthrough — Lenis was intercepting wheel events and causing a "stick, then
// drift" feel on some setups, so we use native browser scroll instead. Native
// scroll is hardware-accelerated, never hijacks input, and is buttery on
// anything modern. This file is kept as a shell so the layout import doesn't
// need to change.

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
