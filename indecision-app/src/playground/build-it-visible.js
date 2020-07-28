

let showContent = true;
let content = undefined;
let buttonContent = 'hide'
const onToggleContent = ()=>{
       showContent = !showContent;
    renderIndecisionApp();
}



const renderIndecisionApp = ()=>{
    const template = (
      <div>
        <h1>Visibilty Toggle</h1>
        <button onClick={onToggleContent}>{showContent ? 'hide content' : 'show details' }</button>        
       {
            showContent && (
                <p>This is my content</p>  
            )
       }
      </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
  }
  onToggleContent()
  renderIndecisionApp();