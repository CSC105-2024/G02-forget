import React from "react";

const TemplateExample = () => {
    const changeExample = (selected) => {
        switch (selected) {
            case 2:
                document.documentElement.style.setProperty("--template-example-1-button","#FFFFFF");
                document.documentElement.style.setProperty("--template-example-2-button","#000000");
                document.documentElement.style.setProperty("--template-example-3-button","#FFFFFF");
                break;
            case 3:
                document.documentElement.style.setProperty("--template-example-1-button","#FFFFFF");
                document.documentElement.style.setProperty("--template-example-2-button","#FFFFFF");
                document.documentElement.style.setProperty("--template-example-3-button","#000000");
                break;
            default:
                document.documentElement.style.setProperty("--template-example-1-button","#000000");
                document.documentElement.style.setProperty("--template-example-2-button","#FFFFFF");
                document.documentElement.style.setProperty("--template-example-3-button","#FFFFFF");
                break;
        }
    }

    return (
        <div className="flex w-[200px] h-[40px] bg-[#F2F2F2] rounded-[20px] border-1 items-center justify-between ">
            <button className="templateExample1 ml-3" onClick={() => changeExample(1)}>
            </button>
            <button className="templateExample2" onClick={() => changeExample(2)}>
            </button>
            <button className="templateExample3 mr-3" onClick={() => changeExample(3)}>
            </button>
        </div>
    );
};

export default TemplateExample