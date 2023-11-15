// This is a counter widget with buttons to increment and decrement the number.

const { widget } = figma
const { useSyncedState, usePropertyMenu, AutoLayout, Text, SVG, Input } = widget

function Widget() {
  const { useSyncedState, Text } = widget;
  const [user, setUser] = useSyncedState('user', 'User');
  const [doSomething, setDoSomething] = useSyncedState('to do something', 'To Do Something');
  const [soThat, setSoThat] = useSyncedState('I can be a happy user.', 'I Can Be A Happy User.');
  const [priority, setPriority] = useSyncedState('High', 'High');
  const [estimate, setEstimate] = useSyncedState('2', '2');
  const [timeframe, setTimeframe] = useSyncedState('hrs', 'hrs');

  return (
    <AutoLayout
      verticalAlignItems={'center'}
      spacing={8}
      padding={35}
      cornerRadius={20}
      direction={"vertical"}
      fill={'#FFFFFF'}
      stroke={'#E6E6E6'}
    >
      <AutoLayout direction={"horizontal"}>
        <Text fontSize={18} width={"hug-contents"} fontWeight={"normal"} fill={"#424242"} horizontalAlignText={'right'}>As a </Text>
        <Input
          value={user}
          placeholder="user"
          fontSize={18}
          width={230}
          paragraphIndent={7}
          fontWeight={"normal"}
          fill="#0500FF"
          onTextEditEnd={(e) => {
            setUser(e.characters);
          }}
          inputFrameProps={{
            fill: "#FFFFFF"
          }}
          horizontalAlignText={'left'}
          inputBehavior="wrap"
        />
      </AutoLayout>
      <AutoLayout direction={"horizontal"} width={"fill-parent"}>
        <Text fontSize={18} width={"hug-contents"} fontWeight={"normal"} fill={"#424242"} horizontalAlignText={'left'}>I want</Text>
        <Input
          value={doSomething}
          placeholder="to do something"
          fontSize={18}
          width={230}
          paragraphIndent={7}
          fontWeight={"normal"}
          fill="#0500FF"
          onTextEditEnd={(e) => {
            setDoSomething(e.characters);
          }}
          inputFrameProps={{
            fill: "#FFFFFF"
          }}
          horizontalAlignText={'left'}
          inputBehavior="wrap"
        />
      </AutoLayout>
      <AutoLayout direction={"horizontal"}>
        <Text fontSize={18} width={"hug-contents"} fontWeight={"normal"} fill={"#424242"} horizontalAlignText={'center'}>So that </Text>
        <Input
          value={soThat}
          placeholder="I can be a happy user."
          fontSize={18}
          width={250}
          paragraphIndent={7}
          fontWeight={"normal"}
          fill="#0500FF"
          onTextEditEnd={(e) => {
            setSoThat(e.characters);
          }}
          inputFrameProps={{
            fill: "#FFFFFF"
          }}
          horizontalAlignText={'left'}
          inputBehavior="wrap"
        />
      </AutoLayout>
      <AutoLayout direction={"horizontal"} padding={{ top: 15, left: 0, right: 0, bottom: 0 }}>
        <AutoLayout padding={{ top: 0, left: 0, right: 30, bottom: 0 }} verticalAlignItems={"end"}>
          <Text fontSize={16} width={"hug-contents"} height={'fill-parent'} fontWeight={"normal"} fill={"#424242"} horizontalAlignText={'center'} verticalAlignText={'center'}>Priority</Text>
          <Input
            value={priority}
            placeholder="High"
            fontSize={18}
            width={75}
            paragraphIndent={7}
            fontWeight={"normal"}
            fill="#0500FF"
            onTextEditEnd={(e) => {
              setPriority(e.characters);
            }}
            inputFrameProps={{
              fill: "#FFFFFF"
            }}
            horizontalAlignText={'center'}
            inputBehavior="truncate"
          />
        </AutoLayout>
        <Text fontSize={16} width={"hug-contents"} height={'fill-parent'} fontWeight={"normal"} fill={"#424242"} horizontalAlignText={'center'} verticalAlignText={'center'}>Estimate</Text>
        <Input
          value={estimate}
          placeholder="2"
          fontSize={18}
          width={50}
          paragraphIndent={7}
          fontWeight={"normal"}
          fill="#0500FF"
          onTextEditEnd={(e) => {
            setEstimate(e.characters);
          }}
          inputFrameProps={{
            fill: "#FFFFFF"
          }}
          horizontalAlignText={'center'}
          inputBehavior="truncate"
        /><Input
          value={timeframe}
          placeholder="hrs"
          fontSize={18}
          width={50}
          paragraphIndent={7}
          fontWeight={"normal"}
          fill="#0500FF"
          onTextEditEnd={(e) => {
            setTimeframe(e.characters);
          }}
          inputFrameProps={{
            fill: "#FFFFFF"
          }}
          horizontalAlignText={'center'}
          inputBehavior="truncate"
        />
      </AutoLayout>
    </AutoLayout>
  )
}

widget.register(Widget)
