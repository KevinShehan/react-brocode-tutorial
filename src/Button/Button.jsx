
// import './Button.modular.css';


function Button() {

  const styles = { 
    backgroundColor:" hsl(200, 100%, 50%)",
    padding: "10px 20px",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div>
        <button style={styles} className="button">CLick me</button>
    </div>
  )
}

export default Button