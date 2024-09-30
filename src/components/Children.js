const Children = ({children, myValue}) => {
    return(
        <div>
            <h2>
                Este é um componente
            </h2>
            {children}
            <p>O valor é: {myValue}</p>
        </div>
    );
};
export default Children;