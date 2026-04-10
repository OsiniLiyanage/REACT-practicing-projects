function Notifications({}) {
  const count = 25;
  return <div>{count > 0 && <p>You have {count} notifications</p>}</div>;
}

export default Notifications;