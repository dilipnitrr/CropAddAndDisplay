import React, { useState, useContext } from "react";
import {StoreContext} from '../src/context';

import { Grid, FormControl, MenuItem, InputLabel, TextField, Typography, Button } from '@material-ui/core'
import Select from '@material-ui/core/Select';

// export async function getServerSideProps(ctx){
//     const {id} = ctx.query;
//     console.log("id is ", id);
//     return {props : {id}}
//   }

const upperComponent = (item, menuData) => {
    const {
        cropType,
        quantity,
        date,
        shift
    }  = item;
    return <Grid container item sm={12}>
        <Grid container item >
        <Typography>Upper part for Desplaying the stuff</Typography>
        </Grid>
        <Grid container item sm={6}>
            <Select value={cropType}>
                {
                    menuData.map((item, i) => {
                        return <MenuItem value={item}>
                            {item}
                        </MenuItem>
                    })
                }
            </Select>
        </Grid>
        <Grid container item sm={6}>
            <Grid container>
                <Grid item sm={6}>
                    <TextField id="standard-basic" label="Enter Quantity in Kg" value = {quantity}/>
                </Grid>
                <Grid item sm={6}>
                    <TextField id="standard-basic" label="Enter date"  value = {date}/>
                </Grid>
            </Grid>
            <Grid container  >
                <TextField id="standard-basic" label="Shift"  value = {shift}/>
            </Grid>
        </Grid>
    </Grid>
}



const CropDetails = () => {

    const storeData = useContext(StoreContext);
    const {setSelectedMenu} = storeData;
    const {menuData, selectedMenu} = storeData.data;

    const [cropType, setcropType] = useState(selectedMenu);
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("");
    const [shift, setShift] = useState("");
    const [cropList, setCropList] = useState([]);

    const handleQuantity =(event) => {
        setQuantity(event.target.value);
    }
    const handleDate =(event) => {
        setDate(event.target.value);
    }
    const handleShift =(event) => {
        setShift(event.target.value);
    }
    const onclickHandler = () => {
       
        const obj = {
            cropType,
            quantity,
            date,
            shift
        }
        console.log('obj------',obj);
        console.log('obj------',[...cropList,obj]);
        setCropList([...cropList,obj])
        setShift('');
        setQuantity('');
        setDate('');
    }

    const onChangeEventHandler = (event) => {
        //setcropType(event.target.value);
        //const id = cropType;
        setcropType(event.target.value);
        setSelectedMenu(event.target.value);
        //Router.push("/CropDetails");
     }
    console.log('cropList.length',cropList);
    return (
        <div>
            {/* //upper  part of commponent responsible for displaying the stuff */}
            <Grid container >
                {
                    cropList.map((item, i)=>{
                        return upperComponent(item, menuData);
                    })
                    //cropList.length?upperComponent():<></>
                    // /upperComponent
                }
                {/* //lower part responsible for adding the stuff */}
                <Typography>Lower part for adding the stuff</Typography>
                <Grid container item sm={12}>
                    <Grid container item >
                        <p>This is lower grid</p>
                    </Grid>
                    <Grid container item sm={6}>
                    <Select value = {selectedMenu} onChange={onChangeEventHandler}>
                            {
                                menuData.map((item, i) => {
                                    return <MenuItem value={item}>
                                        {item}
                                    </MenuItem>
                                })
                            }
                        </Select>
                    </Grid>
                    <Grid container item sm={6}>
                        <Grid container>
                            <Grid item sm={6}>
                                <TextField id="standard-basic" label="Enter Quantity in Kg" value = {quantity} onChange = {
                                    handleQuantity
                                }/>
                            </Grid>
                            <Grid item sm={6}>
                                <TextField id="standard-basic" label="Enter date" value = {date} onChange = {
                                    handleDate
                                }/>
                            </Grid>
                        </Grid>
                        <Grid container  >
                            <TextField id="standard-basic" label="Shift" value = {shift} onChange = {
                                handleShift
                            }/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Button class="Primary" 
                        variant="contained"
                        onClick = {onclickHandler}
                        >Add Crop</Button>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default CropDetails;