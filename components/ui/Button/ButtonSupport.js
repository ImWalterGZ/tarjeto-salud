"use client";

import config from "@/config";

const ButtonSupport = () => {
  const handleClick = () => {
    if (config.resend?.supportEmail) {
      window.open(
        `mailto:${config.resend.supportEmail}?subject=Need help with ${config.appName}`,
        "_blank"
      );
    }
  };

  return (
    <button
      className="btn btn-sm"
      onClick={handleClick}
      data-tooltip-id="tooltip"
      data-tooltip-content="Talk to support"
      title="Chat with support"
    >
      Ayuda
    </button>
  );
};

export default ButtonSupport;
