import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface ModalProps {
    open: boolean
    handleClose: () => void
    id: string
    address: string
    allDay: boolean
    latitude: string
    longitude: string
    services: object
}





export default function CustomModal({
                                        open,
                                        handleClose,
                                        id="не известен",
                                        address="не известен",
                                        allDay=false,
                                        latitude="не известен",
                                        longitude="не известен",
                                        services= {},
                                    }: ModalProps) {

    const makeServices = (data: object) => {

        const mapStatus = {
            SUPPORTED: 'да',
            UNSUPPORTED: 'нет',
            AVAILABLE: 'да',
            UNAVAILABLE: 'нет',
            UNKNOWN: 'неизвестно',
        }

        const makeOneService = (name: string, serviceCapability: string, serviceActivity: string) => {
            console.log("makeOneService", name)
            return (
                <>
                    <Typography sx={{mt: 1}} variant={"body1"}>
                        Имя сервиса: {name}
                    </Typography>
                    <Typography sx={{mt: 1}} variant={"subtitle2"}>
                        Активен: {(serviceActivity in mapStatus) ? mapStatus[serviceActivity] : "неизвестно"}
                    </Typography>
                    <Typography sx={{mt: 1}} variant={"subtitle2"}>
                        Активен: {(serviceActivity in mapStatus) ? mapStatus[serviceActivity] : "неизвестно"}
                    </Typography>
                </>
            )
        }

        const serviceNames = Object.keys(data)
        console.log("serviceNames", serviceNames)
        // const serviceParams = data[serviceName]
        // console.log("one service data", serviceParams)

        const checkServiceParams = (serviceParams): boolean => {
            const status = serviceParams && "serviceCapability" in serviceParams && "serviceCapability" in serviceParams;
            console.log("checkServiceParams", status)
            return status
        }

        return(
            <>
                {
                    serviceNames.map((serviceName)=>{

                        const serviceParams = data[serviceName]

                        if (checkServiceParams(serviceParams))
                            return makeOneService(serviceName, serviceParams.serviceCapability, serviceParams.serviceActivity)
                    })
                }
            </>
        )
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        id: {id}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Адресс: {address}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Работает весь день: {allDay ? "да" : "нет"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        Координаты: {`${latitude}-${longitude}`}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        {/*Сервисы: {JSON.stringify(services)}*/}
                        Сервисы: {makeServices(services)}
                    </Typography>

                </Box>
            </Modal>
        </div>
    );
}
