import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from '../../hooks'
import { updateComponent } from '../../store/'
import { LinkGridProps } from "../../interfaces/gridInterface";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Card } from "@mui/material";
import TextField from '@mui/material/TextField';


const LinkGridSetting: React.FC<LinkGridProps> = (props) => {
  const dispatch = useAppDispatch();
  const [linkGridSettingItem, setLinkGridSettingItem] = useState<LinkGridProps>({ ...props });
  const [title, setTitle] = useState('insert title');

  useEffect(() => {
    console.log(linkGridSettingItem, 'change state');
    dispatch(updateComponent({ index: linkGridSettingItem.index, props: { ...linkGridSettingItem, title } }));
  }, [linkGridSettingItem, title, dispatch]);

  const handleChangeMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLinkGridSettingItem(item => ({
      ...item,
      link: value
    }));
  }


  return (
    <Grid >
      <Card>
        <Grid >
        </Grid>
        <TextField variant="standard" fullWidth={true} defaultValue={linkGridSettingItem.link} onChange={handleChangeMessage} />
        <Grid>
          <TextField variant="standard" fullWidth={true} defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} />
        </Grid>
      </Card>
    </Grid>
  )
}



export {
  LinkGridSetting
}