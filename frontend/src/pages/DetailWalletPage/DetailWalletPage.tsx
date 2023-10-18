import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box} from "@mui/material";
import ArrayBlock from "@/components/pageUI/ArrayBlock/ArrayBlock";

const DetailWalletPage = () => {
    return (
        <Box sx={{mb:3}}>
            <ArrayBlock text={"Счет №54215-048-05"} link={"/wallet"}/>

            <Accordion sx={{my: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography fontWeight={"bold"}>
                        Общая информация
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Ф.И.О.:
                        </Typography>
                        <Typography>
                            Галина Николаевна С.
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Адрес регистрации:
                        </Typography>
                        <Typography>
                            Сергиев Посад г., Клубная ул., д. 3, кв. 48
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Общая/жилая площадь:
                        </Typography>
                        <Typography>
                            55.9 / 55.9 м2
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Количество проживающих:
                        </Typography>
                        <Typography>
                            1
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Количество комнат:
                        </Typography>
                        <Typography>
                            3
                        </Typography>
                    </Box>

                </AccordionDetails>
            </Accordion>

            <Accordion sx={{my: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography fontWeight={"bold"}>Счетчик</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Номер счетчика:
                        </Typography>
                        <Typography>
                            68434374
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Дата установки:
                        </Typography>
                        <Typography>
                            26.10.2021
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Значность счетчкиа:
                        </Typography>
                        <Typography>
                            6,2
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Марка счетчкиа:
                        </Typography>
                        <Typography>
                            ЛЕ 221.1.R4.Р2
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Установочные показания:
                        </Typography>
                        <Typography>
                            1 кВт*ч
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Коэффициент трансофрмации:
                        </Typography>
                        <Typography>
                            1
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Срок окончания МПИ:
                        </Typography>
                        <Typography>
                            2037 г.
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Место установки счетчика:
                        </Typography>
                        <Typography>
                            Лестница
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Лицо, ответственное за эксплуатацию счетчика:
                        </Typography>
                        <Typography>
                            АО “Мосэнергосбыт”
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Сетевая организация:
                        </Typography>
                        <Typography>
                            Сергиево-Посадский РЭСф-ла ПАО Россети МР
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Тип дома:
                        </Typography>
                        <Typography>
                            Многоквартирный дом
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Наименование системы АСКУЭ:
                        </Typography>
                        <Typography>
                            Нет действующей АСКУЭ
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{my: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography fontWeight={"bold"}>Тариф</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Тип тарифа:
                        </Typography>
                        <Typography>
                            однофазные электронные (многотарифные)
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Тип плиты:
                        </Typography>
                        <Typography>
                            газовая
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Стоимость передачи электроэнергии и иных услуг (по одноставочному тарифу):
                        </Typography>
                        <Typography>
                            492,00 коп./кВт*ч
                        </Typography>
                    </Box>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Величина тарифа:
                        </Typography>
                        <Typography>
                            однотарифный учет (круглосуточный) 6,73 руб./кВт*ч
                        </Typography>
                    </Box>

                </AccordionDetails>
            </Accordion>

            <Accordion sx={{my: 2}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography fontWeight={"bold"}>История тарифов</Typography>
                </AccordionSummary>

                <AccordionDetails>

                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Дата начала/окончания:
                        </Typography>
                        <Typography>
                            01.01.2023/
                        </Typography>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Типы и величины тарифа, ₽/кВт*ч:
                        </Typography>
                        <Typography>
                            однотарифный учет 6,73 руб./кВт*ч
                        </Typography>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Дата начала/окончания:
                        </Typography>
                        <Typography>
                            01.12.2022/31.12.2022
                        </Typography>
                    </Box>


                    <Box sx={{mb: 2}}>
                        <Typography color={"gray"}>
                            Типы и величины тарифа, ₽/кВт*ч:
                        </Typography>
                        <Typography>
                            однотарифный учет 6,73 руб./кВт*ч
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
};

export default DetailWalletPage;
