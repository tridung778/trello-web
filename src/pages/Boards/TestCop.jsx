import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const TestCop = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est impedit harum mollitia, necessitatibus molestiae eos nam dolores reprehenderit distinctio. Voluptates autem ipsum illum doloremque numquam aut quod qui reiciendis."
    );
  }, [value]);

  return (
    <div>
      <QRCode value={value} />
    </div>
  );
};

export default TestCop;
