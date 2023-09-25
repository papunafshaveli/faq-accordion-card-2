import "../AccordionSection/accordion.css";
import downArrow from "../../images/icon-arrow-down.svg";
import upArrow from "../../images/upArrow.svg";

const AccordionSection = (props) => {
  const clickHendler = (id) => {
    if (id === props.choosenSection) {
      props.setChoosenSection(null);
    } else {
      props.setChoosenSection(id);
    }
  };
  return (
    <div
      className="main-accordion"
      key={props.id}
      onClick={() => {
        return clickHendler(props.id);
      }}
    >
      <div className="question-and-image">
        <p className="question">{props.title}</p>

        {props.choosenSection === props.id ? (
          <img className="down-arrow" src={upArrow} alt="down arrow" />
        ) : (
          <img className="up-arrow" src={downArrow} alt="up arrow" />
        )}
      </div>
      {props.choosenSection === props.id ? (
        <p className="answer">{props.subText}</p>
      ) : null}
    </div>
  );
};

export default AccordionSection;
