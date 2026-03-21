function YTCard(props) {
  return (
    <section>
      <img
        src={props.image}
        alt="mkbhd"
        width="400"
      />
      <h3>{props.header}</h3>
      <h4>MKBHD</h4>
      <div class="data">
        <p>2.6M Views</p>
        <p>3 days ago</p>
      </div>
    </section>
  );
}

export default YTCard;
