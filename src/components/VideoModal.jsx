import React, { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";
import play from "../assets/play.png";
import PropTypes from "prop-types";

const VideoModal = (props) => {
  const [isOpen, setOpen] = useState(false);

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      overflowX: "hidden"
      
      
    },
    content: {
      backgroundColor: "transparent",
      border: "none",
      paddingLeft: "22rem",
      marginTop: "8rem",
      width: "100%"
      
      
    },
  };

  const closeVideoModal = () => {
    setOpen(false);
  };

  const openVideoModal = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
    
      <button
        className="btn-secondary hidden items-center sm:flex"
        onClick={openVideoModal}
      >
        <img src={play} alt="Icon" className="mr-2" />
        Ver Video
      </button>
      
      <Modal

        isOpen={isOpen}
        onRequestClose={closeVideoModal}
        style={modalStyles}
        contentLabel="Video Modal"
      >
        <button className="pl-[60%] text-slate-100"  onClick={closeVideoModal}>X</button>
        <YouTube  videoId={props.videoId} />
        
      </Modal>
    
    </React.Fragment>
  );
};

VideoModal.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoModal;
