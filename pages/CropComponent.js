
import React, { useState, useContext } from "react";
import { Grid, FormControl, MenuItem, InputLabel } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Router from 'next/router'
import { StoreContext } from '../src/context';
import CropDetails from './CropDetails'

const CropComponent = () => {

    const [cropType, setcropType] = useState("");
    const storeData = useContext(StoreContext);
    const { data: { menuData, selectedMenu }, setSelectedMenu } = storeData;

    const onChangeEventHandler = (event) => {
        setcropType(event.target.value);
        const id = cropType;
        setSelectedMenu(event.target.value);
        //Router.push("/CropDetails");
    }


    return (
        <Grid>
            {
                selectedMenu ? <CropDetails /> : <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Crop</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        //   value={age}
                        onChange={onChangeEventHandler}
                    >
                        {
                            menuData.map((item, i) => {
                                return <MenuItem value={item}>
                                    {item}
                                </MenuItem>
                            })
                        }
                        {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Cucumber"}>Cucumber</MenuItem>
            <MenuItem value={"SugarCane"}>SugarCane</MenuItem>
            <MenuItem value={"Carrot"}>Carrot</MenuItem> */}
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>
            }

        </Grid>
    )
}

export default CropComponent;