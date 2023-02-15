import { Card, TextareaAutosize, TextField } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { ParagraphGridProps } from '../../interfaces/gridInterface'
import { useAppDispatch } from '../../hooks'
import { updateComponent } from '../../store/'

const ParagraphGridSetting: React.FC<ParagraphGridProps> = (props) => {
  const dispatch = useAppDispatch();
  const [paragraph, setParagraph] = useState('set paragraph');
  const [title, setTitle] = useState('set title');

  useEffect(() => {
    dispatch(updateComponent({ index: props.index, props: { paragraph, title } }));
  }, [paragraph, title, props, dispatch]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setParagraph(value)
  }

  return (
    <Grid>
      <Card>
        <Grid>
          <TextField variant="standard" fullWidth={true} placeholder={title} onChange={(e) => { setTitle(e.target.value) }} />
        </Grid>
        <Grid>
          <TextareaAutosize className="textarea-setting" minRows={2} placeholder={paragraph} onChange={handleChange} />

        </Grid>
      </Card >
    </Grid >
  );
}


export {
  ParagraphGridSetting
}