import React from 'react';
import { Cell, Toast, Uploader } from "f6";

const upload = (file: File) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        url: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics7.baidu.com%2Ffeed%2Fd000baa1cd11728b77ef6b9ac3047ac7c1fd2c4d.jpeg%3Ftoken%3D45e20b4c99bf3d23c5ef26a2e9944e4b&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642352400&t=cb9ec90256d8a042f3124d5675e7f2b2'
      })
    }, 1000)
  })
}

export default function () {
  const [files, setFiles] = React.useState([{
    url: 'https://gimg3.baidu.com/search/src=http%3A%2F%2Fpics6.baidu.com%2Ffeed%2F0df431adcbef76098e49400124251ac57ed99ef4.jpeg%3Ftoken%3Dd0663d8574d631b01e1e40cebbad39c6&refer=http%3A%2F%2Fwww.baidu.com&app=2021&size=f360,240&n=0&g=0n&q=75&fmt=auto?sec=1642352400&t=b409d1913103214d7f99a3fbf1a4e16b'
  }]);

  const onChange = (l) => {
    console.log(l)
  }

  return (
    <div style={{ padding: 10,  background: '#fff' }}>
      <Uploader onChange={onChange} upload={upload} defaultValue={files} />
    </div>
  );
}
