import React from 'react';
import { Divider, Steps } from 'antd';

const StepperJS: React.FC = () => (
  <>
    {/* <Steps
      progressDot
      current={1}
      items={[
        {
          title: 'Finished',
          description: 'This is a description.',
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    /> */}
    <Steps
      progressDot
      current={2}
      direction="horizontal"
      items={[
        {
          title: 'Pendaftaran',
          description: 'Registrasi PPDB sampai tanggal 21 Desember 2024',
        },
        {
          title: 'Pengumpulan Berkas',
        },
        {
          title: 'Test Seleksi',
          description: 'Test akademik, Test bacaan quran, Psikotest, Interview + survey virtual, Pantuhir ',
        },
        {
          title: 'Pengumuman Kelolosan',
        },
        {
          title: 'Daftar Ulang',
        },
      ]}
    />
  </>
);

export default StepperJS;