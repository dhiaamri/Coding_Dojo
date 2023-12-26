import React,{useState} from "react";

const Tabs = ({ tabs }) => {
    const [content,setContent]=useState("")
    const [selectedTab, setSelectedTab] = useState(null);

    const tabsHandler=(idx)=>()=>{
        setSelectedTab(idx);

        setContent(tabs[idx])
    }


  return (
    <>
    <div style={{display:"flex"}} >
      {tabs.map((content, idx) => (
        <button onClick={tabsHandler(idx)} key={idx} className={selectedTab === idx ? 'active' : ''} >
            Tab {idx}</button>
      ))}
    </div>
    <p className="content">{content}</p>
    </>
    
  );
};

export default Tabs;
