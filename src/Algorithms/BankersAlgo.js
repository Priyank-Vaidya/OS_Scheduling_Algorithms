import {React,useState} from 'react'

import { Navbar } from '../Components/Navbar'
export const BankersAlgo = () => {

  //Time Complexity of Banker's
// Best case: O(n * m)
// Average case: O(n * m^2)
// worst case: O(n * m^2)


// start of the logic
const [isReset,notReset] = useState('');
function reset(){
    for(var i=1; i<=5; i++){
      for(var j=1; j<=3; j++){
        document.getElementById('a'+i+j).value = isReset;
        document.getElementById('m'+i+j).value = isReset;
        document.getElementById('n'+i+j).value = isReset;
        // console.log('a'+i+j)
      }
      document.getElementById('p'+i).value = '';
    }
    document.getElementById('av11').value = '';
    document.getElementById('av12').value = '';
    document.getElementById('av13').value = '';
    document.getElementById('resourceA').value = '';
    document.getElementById('resourceB').value = '';
    document.getElementById('resourceC').value = '';
    // document.body.style.backgroundColor = "#ffffff";
  }
  
  function example(){
    var sam = [[0,1,0],
          [2,0,0],
          [3,0,2],
          [1,1,1],
          [1,0,2]];
  
    var max = [[7,5,3],
          [3,2,2],
          [8,0,2],
          [2,2,2],
          [4,3,3]];
    for(var i=1; i<=5; i++){
      for(var j=1; j<=3; j++){
        document.getElementById('a'+i+j).value = sam[i-1][j-1];
        document.getElementById('m'+i+j).value = max[i-1][j-1];
      }
    }
    document.getElementById('resourceA').value = 10;
    document.getElementById('resourceB').value = 5;
    document.getElementById('resourceC').value = 7;
  }
  function exampleDeadlock(){
    var sam = [[1,1,0],
          [2,0,0],
          [4,0,0],
          [1,2,1],
          [1,0,2]];
  
    var max = [[11,5,3],
          [3,2,2],
          [8,0,2],
          [2,2,2],
          [4,3,3]];
    for(var i=1; i<=5; i++){
      for(var j=1; j<=3; j++){
        document.getElementById('a'+i+j).value = sam[i-1][j-1];
        document.getElementById('m'+i+j).value = max[i-1][j-1];
      }
    }
    document.getElementById('resourceA').value = 10;
    document.getElementById('resourceB').value = 5;
    document.getElementById('resourceC').value = 7;
  }
  
  function find_avai(){
    var a = document.getElementById('resourceA').value;
    var b = document.getElementById('resourceB').value;
    var c = document.getElementById('resourceC').value;
    var x = 0;
    var y = 0;
    var z = 0;
    for(var i=1; i<=5; i++){
         x = x + parseInt(document.getElementById('a'+i+'1').value);
         y = y + parseInt(document.getElementById('a'+i+'2').value);
         z = z + parseInt(document.getElementById('a'+i+'3').value);
    }
    document.getElementById('av11').value = a-x;
    document.getElementById('av12').value = b-y;
    document.getElementById('av13').value = c-z;
  }
  
  function find_need(){
    for(var i=1; i<=5; i++){
      for(var j=1; j<=3; j++){
        document.getElementById('n'+i+j).value = parseInt(document.getElementById('m'+i+j).value) - parseInt(document.getElementById('a'+i+j).value);
      }
    }
  }
  
  
  function run_algo(){
    find_avai();
    find_need();
    var k=1;
    var q = 1;
    for(var j=1; j<=5; j++){
      var x1 = parseInt(document.getElementById('av11').value);
      var x2 = parseInt(document.getElementById('av12').value);
      var x3 = parseInt(document.getElementById('av13').value);
      for(var i=k; i<=5; i++){
        var ex1 = parseInt(document.getElementById('a'+i+'1').value);
        var ex2 = parseInt(document.getElementById('a'+i+'2').value);
        var ex3 = parseInt(document.getElementById('a'+i+'3').value);
        if(ex1!== 0 || ex2!== 0 || ex3!== 0){
          if(x1 >= parseInt(document.getElementById('n'+i+'1').value) && x2 >= parseInt(document.getElementById('n'+i+'2').value) && x3 >= parseInt(document.getElementById('n'+i+'3').value)){
            document.getElementById('p'+q).value = 'P'+i;
            document.getElementById('av11').value = parseInt(document.getElementById('av11').value) + parseInt(document.getElementById('a'+i+'1').value);
            document.getElementById('av12').value = parseInt(document.getElementById('av12').value) + parseInt(document.getElementById('a'+i+'2').value);
            document.getElementById('av13').value = parseInt(document.getElementById('av13').value) + parseInt(document.getElementById('a'+i+'3').value);
            document.getElementById('a'+i+'1').value = '0';
            document.getElementById('a'+i+'2').value = '0';
            document.getElementById('a'+i+'3').value = '0';
            k=i+1;
            if (k===6){
              k=1;
            }
            q = q + 1;
            break;
          }
        }
      }
    }
    if(q !== 6){
      alert("Deadlock!!");
    //   document.body.style.backgroundColor = "#ff7171";
    }
    else{
    //   document.body.style.backgroundColor = "#28df99";
      alert("Safe!!");
    }
  }

//   end of the logic




  return (
    <div className='text-white  bg-[#19191c] font-Gloock items-center'>
<Navbar/>
    {/* <!-- Main Algo Implementation Starts --> */}
    <div className="container pt-5 justify-center bg-[#19191c]">
      <h2 className="text-center subheading text-[40px] p-7">BANKER'S ALGORITHM</h2>
    </div>
    <div className="container bg-green-500 ">
      <div className="row p-2 pt-5 text-[20px] flex gap-24 justify-center ">
        {/* <!-- Total Instance Form Starts --> */}
        <div className="col-4 text-center">
          <div className="input-group mb-3">
            {/* start of the first */}
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">No of Instances of Resource A</span>
            </div>
            <input type="text" size="2" maxLength="2" className="form-control text-black" id="resourceA" required/>
          </div> 
        </div>
        {/* end of the first input */}
        <div className="col-4 text-center">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">No of Instances of Resource B</span>
            </div>
            <input type="text" size="2" maxLength="2" className="form-control text-black" id="resourceB" required/>
          </div> 
        </div>
        <div className="col-4 text-center">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">No of Instances of Resource C</span>
            </div>
            <input type="text" size="2" maxLength="2" className="form-control text-black" id="resourceC" required/>
          </div> 
        </div>
        {/* <!-- Total Instance Form Ends --> */}
      </div>
    </div>
    <div className="container pt-5 ">
      <div className="row flex justify-center gap-24   text-[25px]">
        {/* <!-- Allocation Form Starts --> */}
        <div className="col-3 text-center">
          <table className="text-center">
            <thead>
              <tr>
                <th colSpan="4"><h4>Allocation</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>P1</td>
                <td><input size="2" maxLength="2" id='a11' className='text-black'/></td>
                <td><input size="2" maxLength="2" id='a12' className='text-black'/></td>
                <td><input size="2" maxLength="2" id='a13' className='text-black'/></td>
              </tr>
              <tr>
                <td>P2</td>
                <td><input size="2" maxLength="2" id="a21" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="a22" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="a23" className='text-black'/></td>
              </tr>
              <tr>
                <td>P3</td>
                <td><input size="2" maxLength="2" id="a31" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="a32" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="a33" className='text-black'/></td>
              </tr>
              <tr>
                <td>P4</td>
                <td><input size="2" maxLength="2" id="a41" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="a42" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="a43" className='text-black'/></td>
              </tr>
              <tr>
                <td>P5</td>
                <td><input size="2" maxLength="2" id="a51" className='text-black' /></td>
                <td><input size="2" maxLength="2" id="a52" className='text-black' /></td>
                <td><input size="2" maxLength="2" id="a53" className='text-black'  /></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Allocation Form Ends --> */}

        {/* <!-- Max Form Starts --> */}
        <div className="col-3 text-center">
          <table className="text-center">
            <thead>
              <tr>
                <th colSpan="4"><h4>Maximum</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>P1</td>
                <td><input size="2" maxLength="2" id="m11" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m12" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m13" className='text-black'/></td>
              </tr>
              <tr>
                <td>P2</td>
                <td><input size="2" maxLength="2" id="m21" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m22" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m23" className='text-black'/></td>
              </tr>
              <tr>
                <td>P3</td>
                <td><input size="2" maxLength="2" id="m31" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m32" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m33" className='text-black'/></td>
              </tr>
              <tr>
                <td>P4</td>
                <td><input size="2" maxLength="2" id="m41" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m42" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m43" className='text-black'/></td>
              </tr>
              <tr>
                <td>P5</td>
                <td><input size="2" maxLength="2" id="m51" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m52" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="m53" className='text-black'/></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Max Form Ends --> */}

        {/* <!-- Available Form Starts --> */}
        <div className="col-3 text-center">
          <table className="text-center">
            <thead>
              <tr>
                <th colSpan="4"><h4>Available</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td></td>
                <td><input size="2" maxLength="2" id="av11" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="av12" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="av13" className='text-black'/></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Available Form Ends --> */}
        {/* <!-- Need Form Starts --> */}
        <div className="col-3 text-center">
          <table className="text-center">
            <thead>
              <tr>
                <th colSpan="4"><h4>Need</h4></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>A</td>
                <td>B</td>
                <td>C</td>
              </tr>
              <tr>
                <td>P1</td>
                <td><input size="2" maxLength="2" id="n11" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n12" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n13" className='text-black'/></td>
              </tr>
              <tr>
                <td>P2</td>
                <td><input size="2" maxLength="2" id="n21" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n22" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n23" className='text-black'/></td>
              </tr>
              <tr>
                <td>P3</td>
                <td><input size="2" maxLength="2" id="n31" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n32" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n33" className='text-black'/></td>
              </tr>
              <tr>
                <td>P4</td>
                <td><input size="2" maxLength="2" id="n41" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n42" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n43" className='text-black'/></td>
              </tr>
              <tr>
                <td>P5</td>
                <td><input size="2" maxLength="2" id="n51" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n52" className='text-black'/></td>
                <td><input size="2" maxLength="2" id="n53" className='text-black'/></td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Need Form Ends --> */}
      </div>

      {/* <!-- Algo Buttons Starts --> */}
      <div className="  text-center flex justify-center gap-0 mt-10 ">
        <div className="col-4 w-1/2"> 
          <button  className=" bg-[#283e26] p-6 rounded-xl " onClick={exampleDeadlock}>Example Deadlock</button>
        </div>
        <div className="col-4 w-1/2">
          <button  className=" bg-[#283e26] p-6 rounded-xl " onClick={example}>Example Safe</button>
        </div>
        <div className="col-4 w-1/2">
          <button  className=" bg-[#283e26] p-6 rounded-xl" onClick={run_algo}>Run Algorithm</button>
        </div>
        <div className="col-4 w-1/2">
          <button  className=" bg-[#283e26] p-6 rounded-xl" onClick={reset}>Reset Values</button>
  </div>
      </div> 
      {/* <!-- Algo Buttons Ends --> */}
      
      {/* <!-- Process Sequence Starts --> */}
      <div className="row p-3 mt-3 pb-12 ">
        <div className="col-6 offset-4 ">
          <h4 className='text-[30px]'>Process Sequence :</h4><br/>
          <div className='flex justify-center gap-10 text-black' >
          <input id="p1" size="2" maxLength="2" className='w-20'/>
          <input id="p2" size="2" maxLength="2" className='w-20'/>
          <input id="p3" size="2" maxLength="2" className='w-20'/>
          <input id="p4" size="2" maxLength="2" className='w-20'/>
          <input id="p5" size="2" maxLength="2" className='w-20'/>   
        </div>
        </div>
      </div>
      {/* <!-- Process Sequence Ends --> */}
    </div>
    </div>
  )
}
