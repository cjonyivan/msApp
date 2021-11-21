
const LEFT = 'LEFT';
const RIGHT = 'RIGHT';

const WrapperRectangle = ({ data }) => {
  return (
    <div style={{ width: "720px", height: "720px" }}>{createDivs(data)}</div>
  );
};

const createDivs = (data = null, parent = null, typeSibling = null) => {
  const padding = '4px';
  const existRight = data && data.hasOwnProperty("right");
  const existLeft = data && data.hasOwnProperty("left");
  const existRight_parent = parent && parent.hasOwnProperty("right");
  const has_right_and_left = existLeft && existRight;
  const almost_right_and_left = existLeft || existRight;
  const hasSiblings_but_not_childrens = parent && typeSibling  && !has_right_and_left && ((typeSibling === LEFT && existRight_parent));


  let id, right, left = null;
  if(data){
    if(data.id){
        id = data.id;
    }
    if(data.right){
      right = data.right;
    }
    if(data.left){
      left = data.left;
    }
  }


  
 


  return (
    <div style={{ border: "1px solid black", height: (data && !hasSiblings_but_not_childrens ? "100%": "25%"), padding}} className="text-center">
      {id ? <div style={{ float: "left", width: "100%", height: "10%" }}>{id}</div>: null}
      <div style={{ float: "left", width: "100%", height: "90%", padding, border: (has_right_and_left ? "1px solid black": "" ) }}>
        {almost_right_and_left ? <div
          style={{
            float: "left",
            width: "50%",
            height: "100%",
            padding,
          }}>
          {createDivs(left, data, LEFT)}
        </div>: null}
        {almost_right_and_left ? <div
          style={{
            float: "right",
            width: "50%",
            height: "100%",
            padding
          }}>
          {createDivs(right, data, RIGHT)}
        </div>: null}
      </div>
    </div>
  );
};

export default WrapperRectangle;
