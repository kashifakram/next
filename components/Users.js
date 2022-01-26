import All from '../imports/reactImports';

const UserContext = All.createContext();

export const UserParent = () => {
    const [user, setUser] = All.state("Kashif Akram Admin User");

    return (
        <UserContext.Provider value={user}>
            <h1>Hello from User Parent Dear {user}</h1>
            <Component2 />
        </UserContext.Provider>
    )
}

function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }

  export function Component5() {
    const user = All.useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again! from 5th child!`}</h2>
      </>
    );
  }