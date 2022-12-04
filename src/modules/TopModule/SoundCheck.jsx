import React from 'react';
import styled from 'styled-components';
import { Button, Typography } from '@mui/material';
import useSound from 'use-sound';
import boopSfx from '../../sounds/boop.wav';

export default function SoundCheck({ updateStage }) {
  const [play] = useSound(boopSfx);
  const clickHandlerYes = () => {
    updateStage('test');
  };
  const clickHandlerNo = () => {
    play();
  };

  return (
    <>
      <Title variant="h3">Проверка звук</Title>
      <Wrapper>
        <svg onClick={play} width="100" height="100" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M892.1 737.8L781.8 674.1C779.988 673.062 777.989 672.392 775.918 672.127C773.846 671.862 771.743 672.007 769.728 672.555C767.713 673.103 765.825 674.043 764.173 675.32C762.521 676.597 761.137 678.188 760.1 680L740.2 714.5C735.8 722.1 738.4 731.9 746 736.3L856.3 800C858.112 801.038 860.111 801.708 862.182 801.973C864.254 802.238 866.357 802.093 868.372 801.545C870.387 800.997 872.275 800.057 873.927 798.78C875.578 797.503 876.963 795.912 878 794.1L897.9 759.6C902.3 752 899.6 742.2 892.1 737.8V737.8ZM760 344C761.037 345.812 762.422 347.403 764.073 348.68C765.725 349.957 767.613 350.897 769.628 351.445C771.643 351.993 773.746 352.138 775.818 351.873C777.889 351.608 779.888 350.938 781.7 349.9L892 286.2C899.6 281.8 902.2 272 897.8 264.4L878 230C876.963 228.188 875.578 226.597 873.927 225.32C872.275 224.043 870.387 223.103 868.372 222.555C866.357 222.007 864.254 221.862 862.182 222.127C860.111 222.392 858.112 223.062 856.3 224.1L746 287.8C742.348 289.929 739.687 293.418 738.601 297.503C737.514 301.588 738.089 305.938 740.2 309.6L760 344ZM934 476H806C797.2 476 790 483.2 790 492V532C790 540.8 797.2 548 806 548H934C942.8 548 950 540.8 950 532V492C950 483.2 942.8 476 934 476ZM625.9 115C620 115 614 116.6 608.5 120.3L254 352H90C81.2 352 74 359.2 74 368V656C74 664.8 81.2 672 90 672H254L608.5 903.7C614 907.3 620.1 909 625.9 909C642.6 909 658 895.7 658 876.9V147.1C658 128.3 642.6 115 625.9 115Z" fill="#111111" />
        </svg>
        <Title variant="body">Нажми на иконку, чтобы проверить звук</Title>
      </Wrapper>
      <CustomButton
        variant="contained"
        color="success"
        onClick={clickHandlerYes}
      >
        Всё в порядке, звук есть
      </CustomButton>
      <CustomButton
        variant="contained"
        color="error"
        onClick={clickHandlerNo}
      >
        Звука нет, проверить ещё раз
      </CustomButton>
    </>

  );
}
const CustomButton = styled(Button)`
  margin: 16px !important;
`;
const Title = styled(Typography)`
  padding: 32px 0;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
