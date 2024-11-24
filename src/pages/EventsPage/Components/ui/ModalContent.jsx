


function ModalContent({ onClose , description}) {

  return (
      <>
          <div>
              <div className="modal"
                  style={{ height: '100vh', width: '100%', backgroundColor: 'rgba(240, 240, 240, 0.5)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflow: 'hidden', position: 'fixed', zIndex: 100 }}          
              > 
                  <div style={{
                      height: '280px', width: '320px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                      position: 'fixed', backgroundColor: 'white', color: 'black', padding: '20px', borderRadius: '10px',
                      border: '2px solid rgb(240, 240, 240)', boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center',                        
                  }}>
                      

                     
                      <div style={{ marginBottom: '5vh' }}> 
                          {console.log(description)}
                          {description ? description : 'The Description of Event'}
                      </div>


                      <button onClick={onClose}> Close </button>
                  </div>
              </div>
          </div>
      </>
  );
}

export default ModalContent;
