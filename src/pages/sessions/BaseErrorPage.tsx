import React, { ReactNode } from 'react';
import PublicLayout from '../../layout/Public/Public';

type Props = {
  msg?: string;
  title: string | ReactNode;
  subTitle?: string | ReactNode;
  action: ReactNode;
  img?: ReactNode;
  bg: string;
};

const BaseErrorPage = ({ msg, title, action, bg, subTitle }: Props) => (
  <PublicLayout bgImg={bg}>
    {typeof title === 'string' ? <h1 className='align-middle'>{title}</h1> : title}
    {subTitle ? subTitle : null}
    <p>{msg}</p>

    {action}
  </PublicLayout>
);

export default BaseErrorPage;
