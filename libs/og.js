import { ImageResponse } from "next/og";

const paths = [
  "M8.62555 1.04234C10.0214 -0.347446 12.2845 -0.347446 13.6804 1.04234L19.939 7.27381L9.84405 17.3249C8.85189 18.3128 8.35757 19.6086 8.36101 20.9033L1.04688 13.6209C-0.348961 12.2312 -0.348961 9.97787 1.04688 8.58809L8.62555 1.04234Z",
  "M28.2496 1.13165C29.6969 -0.309391 32.0018 -0.350966 33.3976 1.03881L34.2401 1.87762C34.7054 2.34088 34.7054 3.09198 34.2401 3.55524L32.2435 5.54313C31.0374 6.74401 31.0026 8.65638 32.1658 9.81454C33.329 10.9727 35.2498 10.938 36.4559 9.73717L38.4524 7.74928C38.9177 7.28602 39.6721 7.28602 40.1374 7.74928L40.9798 8.58809C42.3757 9.97787 42.3339 12.2727 40.8866 13.7138L23.634 30.8914C22.1867 32.3325 19.8818 32.374 18.486 30.9843L10.9038 23.435C9.50791 22.0452 9.54966 19.7504 10.997 18.3093L28.2496 1.13165Z M35.3774 6.61688C35.959 7.19596 35.959 8.13482 35.3774 8.7139C34.7958 9.29298 33.8528 9.29298 33.2712 8.7139C32.6896 8.13482 32.6896 7.19596 33.2712 6.61688C33.8528 6.0378 34.7958 6.0378 35.3774 6.61688Z",
];

export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

const baseLayout = {
  width: "100%",
  height: "100%",
  display: "flex",
  position: "relative",
  overflow: "hidden",
  fontFamily: "sans-serif",
};

const badgeStyle = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "14px 24px",
  borderRadius: 999,
  fontSize: 26,
  fontWeight: 700,
  letterSpacing: "-0.02em",
};

const titleStyle = {
  display: "flex",
  flexDirection: "column",
  fontSize: 76,
  lineHeight: 1.02,
  fontWeight: 900,
  letterSpacing: "-0.05em",
  maxWidth: 760,
};

const subtitleStyle = {
  display: "flex",
  maxWidth: 760,
  fontSize: 31,
  lineHeight: 1.25,
  opacity: 0.92,
};

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: "auto",
  fontSize: 24,
  fontWeight: 600,
};

export function createOgImage({ badge, title, subtitle, palette }) {
  return new ImageResponse(
    <div
      style={{
        ...baseLayout,
        background: palette.background,
        color: palette.foreground,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: palette.overlay,
        }}
      />

      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: -300,
          width: 750,
          height: 750,
          transform: "rotate(-45deg)",
        }}
      >
        <svg
          style={{ width: "100%", height: "100%", opacity: 0.7 }}
          viewBox="0 -5 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={paths[1]} fill={palette.orbOne} />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bottom: -140,
          left: -60,
          width: 380,
          height: 380,
        }}
      >
        <svg
          style={{ width: "100%", height: "100%", opacity: 0.7 }}
          viewBox="0 -5 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((p, i) => (
            <path key={i} d={p} fill={palette.orbTwo} />
          ))}
        </svg>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "54px 58px",
          zIndex: 1,
        }}
      >
        <div
          style={{
            ...badgeStyle,
            background: palette.badgeBackground,
            color: palette.badgeForeground,
            border: `1px solid ${palette.badgeBorder}`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <svg
              style={{
                width: "1.75rem",
                height: "1.75rem",
              }}
              viewBox="0 -5 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {paths.map((p, i) => (
                <path key={i} d={p} fill={palette.logoBackground} />
              ))}
            </svg>
            <div style={{ display: "flex" }}>Tarjeto |</div>
          </div>
          {badge}
        </div>

        <div style={{ height: 34 }} />

        <div style={titleStyle}>{title}</div>

        <div style={{ height: 24 }} />

        <div style={subtitleStyle}>{subtitle}</div>

        <div style={footerStyle}>
          <div style={{ display: "flex", opacity: 0.8 }}>{palette.domainLabel}</div>
        </div>
      </div>
    </div>,
    OG_IMAGE_SIZE
  );
}
