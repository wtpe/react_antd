import { Button, Carousel } from "antd";

function Carou() {
    return (
        <div style={{ width: '300px', height: '300px', backgroundColor: 'orange', }}>
            <Carousel autoplay dots={true} draggable pauseOnHover={true}>
                <div >
                    <h1 style={{ textAlign: 'center', color: 'white', backgroundColor: 'purple', lineHeight: '300px' }}>slide 1</h1>
                </div>
                <div>
                    <h1 style={{ textAlign: 'center', color: 'white', backgroundColor: 'blue', lineHeight: '300px' }}>slide 1</h1>
                </div>
                <div>
                    <h1 style={{ textAlign: 'center', color: 'white', backgroundColor: 'red', lineHeight: '300px' }}>slide 1</h1>
                </div>
                <div>
                    <h1 style={{ textAlign: 'center', color: 'white', backgroundColor: 'green', lineHeight: '300px' }}>slide 1</h1>
                </div>
            </Carousel>

        </div>
    )
}

export default Carou;
