import "./Tabs.css"

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tab active">Home</button>
      <button className="tab">Categories</button>
      <button className="tab">Saved</button>
    </div>
  )
}

export default Tabs