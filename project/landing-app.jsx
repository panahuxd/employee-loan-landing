(function () {
  const { DesignCanvas, DCSection, DCArtboard, LandingPage } = window;
  const THEMES = window.LANDING_THEMES;
  const DEVICES = [
    { key: "desktop", label: "دسکتاپ", width: 1440 },
    { key: "mobile", label: "موبایل", width: 390 },
  ];
  // generous fallbacks until measured (px)
  const FALLBACK = { desktop: 4200, mobile: 5200 };

  function App() {
    const [heights, setHeights] = React.useState({});
    const [measured, setMeasured] = React.useState(false);
    const refs = React.useRef({});

    React.useEffect(() => {
      let cancelled = false;
      const measure = () => {
        const h = {};
        for (const t of THEMES) {
          for (const d of DEVICES) {
            const el = refs.current[t.id + d.key];
            if (el) h[t.id + d.key] = Math.ceil(el.getBoundingClientRect().height);
          }
        }
        if (!cancelled) { setHeights(h); setMeasured(true); }
      };
      const fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve();
      fontsReady.then(() => {
        // double rAF so layout + webfont metrics settle before measuring
        requestAnimationFrame(() => requestAnimationFrame(measure));
      });
      const t = setTimeout(measure, 1500);
      return () => { cancelled = true; clearTimeout(t); };
    }, []);

    return (
      <React.Fragment>
        {!measured && (
          <div aria-hidden="true" style={{ position: "fixed", left: -100000, top: 0, visibility: "hidden", pointerEvents: "none" }}>
            {THEMES.map((t) =>
              DEVICES.map((d) => (
                <div key={t.id + d.key} ref={(el) => (refs.current[t.id + d.key] = el)} style={{ width: d.width }}>
                  <LandingPage theme={t} device={d.key} measuring={true} />
                </div>
              ))
            )}
          </div>
        )}
        <DesignCanvas style={{ direction: "ltr" }}>
          {THEMES.map((t) => (
            <DCSection key={t.id} id={t.id} title={t.label} subtitle="دسکتاپ و موبایل">
              {DEVICES.map((d) => (
                <DCArtboard
                  key={d.key}
                  id={t.id + "-" + d.key}
                  label={d.label}
                  width={d.width}
                  height={heights[t.id + d.key] || FALLBACK[d.key]}
                  style={{ background: "var(--background)", height: "auto" }}
                >
                  <LandingPage theme={t} device={d.key} />
                </DCArtboard>
              ))}
            </DCSection>
          ))}
        </DesignCanvas>
      </React.Fragment>
    );
  }

  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
