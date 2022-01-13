import React, { useState } from "react";
import { defineName } from "../utils/name";
import Space from "../space";
import "./index.less";
import { usePropsValue } from "../utils/useValue";
import Icon from "f6-icons";

export interface UploaderProps {
  defaultValue?: ImageUploadItem[];
  value?: ImageUploadItem[];
  multiple?: boolean;
  maxSize?: number;
  maxCount?: number;
  upload?: (file: File) => Promise<ImageUploadItem>;
  onChange?: (items: ImageUploadItem[]) => void;
}

export interface ImageUploadItem {
  url?: string;
}

const blobToDataURL = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = function (evt) {
      let base64 = evt.target!.result;
      resolve(base64 as string);
    };
    reader.readAsDataURL(blob);
  });
};

const [prefix] = defineName("uploader");

const Uploader: React.FC<UploaderProps> & {
  blobToDataURL: (blob: Blob) => Promise<string>;
} = (props) => {
  const [list, setList] = usePropsValue<ImageUploadItem[]>({
    value: props.value,
    defaultValue: props.defaultValue || [],
    onChange: props.onChange,
  });

  const onChange = async (v: any) => {
    const nList: ImageUploadItem[] = [];
    for (let file of v.target.files) {
      nList.push({ url: await blobToDataURL(file) });
    }
    setList([...list, ...nList]);
  };

  const deleteHandle = (index: number) => {
    const nList = list.filter((_, i) => i !== index);
    setList(nList);
  }

  const renderList = (it: ImageUploadItem, index: number) => {
    return (
      <div className={`${prefix}-cell-item`} key={index}>
        <span onClick={() => deleteHandle(index)} className={`${prefix}-cell-delete`}>
          <Icon className={`${prefix}-cell-delete-icon`} name="close-circle-o" />
        </span>
        <img className={`${prefix}-image`} src={it.url} />
      </div>
    );
  };

  return (
    <div className={prefix}>
      <Space>
        {list.map(renderList)}
        <div className={`${prefix}-cell-item`}>
          <input
            className={`${prefix}-input`}
            onChange={onChange}
            type={"file"}
            multiple
          />
          <span className={`${prefix}-upload-button`}>+</span>
        </div>
      </Space>
    </div>
  );
};

Uploader.blobToDataURL = blobToDataURL;

export default Uploader;