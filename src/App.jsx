import { Fragment, useState } from "react";

import "./App.css";
import AccordionSection from "./components/AccordionSection/AccordionSection";

function App() {
  const [choosenSection, setChoosenSection] = useState(2);
  const accordionArr = [
    {
      title: "How many team members can I invite?",
      subText: "You can invite up to 2 additional users on the Free plan.",
      id: 1,
    },
    {
      title: "What is the maximum file upload size?",
      subText:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 2,
    },
    {
      title: "How do I reset my password?",
      subText:
        "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      id: 3,
    },
    {
      title: "Can I cancel my subscription?",
      subText:
        "Yes! Send us a message and we'll process your request no questions asked.",
      id: 4,
    },
    {
      title: "Do you provide additional support?",
      subText: "Chat and email support is available 24/7.",
      id: 5,
    },
  ];
  return (
    <div className="main-div">
      <div className="card">
        {accordionArr.map((item) => {
          return (
            <Fragment key={item.id}>
              <AccordionSection
                title={item.title}
                subText={item.subText}
                id={item.id}
                choosenSection={choosenSection}
                setChoosenSection={setChoosenSection}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default App;
