import { Picker, Toast } from 'f6';

const columns = [
  [
    { label: '广东', value: 'A' },
    { label: '贵州', value: 'B' },
    { label: '浙江', value: 'C' }
  ],
  [
    { label: '苹果1', value: 'A' },
    { label: '苹果2', value: 'B' },
    { label: '苹果3', value: 'C' }
  ]
]

export default function App() {
  return (
    <>
      <Picker
        cascade={false}
        defaultIndex={[0, 0]}
        columns={columns}
        onChange={(index, value, column, picker) => {
          if (index === 0) {
            picker.setColumnOptions(1, [
              { label: '香蕉1', value: 'B' },
              { label: '香蕉1', value: 'C' }
            ])
          }
          console.log(picker)
        }}
      />
    </>
  )
}
