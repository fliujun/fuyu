type ProductPreviewProps = {
  variant: "hero" | "compact" | "empty";
};

export function ProductPreview({ variant }: ProductPreviewProps) {
  if (variant === "empty") {
    return (
      <div className="preview-placeholder" aria-label="作品图预留位置">
        <span>作品图预留</span>
      </div>
    );
  }

  return (
    <div className={`product-preview preview-${variant}`} aria-label="浮光界面预览">
      <div className="preview-window">
        <div className="window-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-hero">
          <div>
            <small>浮光</small>
            <strong>让一切常用的，一触即达。</strong>
          </div>
          <span className="time-chip">09:41</span>
        </div>
        <div className="shortcut-board">
          {["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6"].map(
            (key) => (
              <span key={key}>{key}</span>
            ),
          )}
        </div>
        <div className="widget-row">
          <span>提醒事项</span>
          <span>日历</span>
          <span>翻译</span>
        </div>
      </div>
      {variant === "hero" ? (
        <div className="floating-launcher">
          <strong>Ctrl</strong>
          <span>面板模式</span>
        </div>
      ) : null}
    </div>
  );
}
