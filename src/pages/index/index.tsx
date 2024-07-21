import { View, Text, Map, Button } from "@tarojs/components";
import "./index.scss";
import { useState } from "react";

export default function Index() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Button onClick={() => setVisible(true)}>显示</Button>
      <Button onClick={() => setVisible(false)}>隐藏</Button>
      {visible && <Text>Hello world!</Text>}
      <View>
        <Map longitude={116.3975} latitude={39.909} onError={() => {}} />
      </View>
    </>
  );
}
