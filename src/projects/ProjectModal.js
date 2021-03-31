import React, { Component } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

export const ProjectModal = (props) => {
  const { isOpen, children } = props;

  return (
    // need to apply all of the styles you want in this component so that you dont't repeat a bunch of the same CSS every time you want to render a modal

    <ReactModal isOpen={isOpen}>{children}</ReactModal>
  );
};

// this is an example component, don]'t use it, its just to show how you would use the mpodal in another component
// const ComponentThatUsesModal = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <>
//       <a onClick={() => setIsOpen(true)}>Clicking this open the modal</a>
//       <ProjectModal isOpen={isOpen}>
//         <div>Any content you want goes here</div>
//       </ProjectModal>
//     </>
//   );
// };
