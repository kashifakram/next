import All from '../imports/reactImports';
import {Component5, UserParent} from './Users';

const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
];

function Car({ brand }) {
    const carBrand = (msg) => alert(`Car saying ${msg} that my brand is ${brand}`)
    return (
        <div>
            <button onClick={() => carBrand("local")}>Check Message</button>
        </div>
    );
}


const MissedGoal = () => <h3 style={{ color: 'red' }}>Missed Goal</h3>;
const MadeGoal = () => <h3>Goal!</h3>;


function MyForm() {
    const [inputs, setInputs] = All.state({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => { return { ...values, [name]: value } })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${inputs.username}, ${inputs.age}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
            </label>

            <select value="BMW" onChange={handleChange}>
                {cars.map((c, i) => (<option key={c.id} value={c.brand}>{c.brand}</option>))}
            </select>

            <input type="submit" />
        </form>
    )
}


function Garage() {

    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    return (
        <div>
            {cars.map((c, i) => <Car key={i} brand={c.brand} />)}
            <Car brand="volvo" />
            <h1 style={myStyle}>Goal Status: </h1>{!0 ? <MissedGoal /> : <MadeGoal />}
            <MyForm />
            <UserParent />

        </div>
    )
}


export default All.memorize(Garage)