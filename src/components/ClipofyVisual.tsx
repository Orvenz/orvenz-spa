export default function ClipofyVisual() {
  return (
    <div className="player-mock" aria-hidden="true">
      <div className="player-screen">
        <div className="court-graphic">
          <div className="court-net"></div>
          <div className="ball"></div>
        </div>
        <span className="replay-badge">REPLAY</span>
      </div>
      <div className="player-timeline">
        <div className="timeline-track">
          <div className="timeline-highlight"></div>
        </div>
        <div className="timeline-marks">
          <span>-10s</span>
          <span>-5s</span>
          <span>0s</span>
        </div>
      </div>
    </div>
  );
}
