import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const FormComponent = ({ children }) => {
let num = 1;
    return React.Children.map(children, (child) => {
      const config = {
        ...child.props,
        name: `${num}. Компонент списка`
      };
      num += 1;
      return React.cloneElement(child, config);
    });
  };
  FormComponent.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
           <FormComponent>
            <Component />
            <Component />
            <Component />
            </FormComponent>

        </CollapseWrapper>
    );
};

const Component = ({ name }) => {
    return <div> {name || "Компонент списка"}</div>;
};
Component.propTypes = {
  name: PropTypes.string
};
export default ChildrenExercise;
