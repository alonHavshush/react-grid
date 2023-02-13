import React, { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from '../../hooks'
import { updateComponent } from '../../store/'


interface LinkGridSettingProps {
  index: number;
  link: string;
}


const LinkGridSetting: React.FC<LinkGridSettingProps> = (props) => {
  const dispatch = useAppDispatch();
  const [linkGridSettingItem, setLinkGridSettingItem] = useState<LinkGridSettingProps>({ ...props });
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
    <div>
      <input type="text" defaultValue={linkGridSettingItem.link} onChange={handleChangeMessage} />
      <input type="text" defaultValue={title} onChange={(e) => { setTitle(e.target.value) }} />
    </div>
  )
}



export {
  LinkGridSetting
}