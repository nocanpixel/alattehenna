import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import Image from "next/image";

//Auth
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

//STYLES
import { Button, useTheme, Text, Tooltip, Popover } from '@nextui-org/react';
import MyStyles from "../styles/MyStyles.module.css";

export default function Home() {
    const { user, isLoading } = useUser();
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (
        <div>
            <div>
                Welcome home {user.name}
                <Text
                    css={{
                        color: '$blue800',
                        fontSize: '$tiny',
                        padding: '$2 $4'
                    }}
                >
                    Using tokens
                </Text>

                <Popover>
                    <Popover.Trigger>
                        <Button auto flat>Open Popover</Button>
                    </Popover.Trigger>
                    <Popover.Content>
                        <Text css={{ p: "$10" }}>This is the content of the popover.</Text>
                    </Popover.Content>
                </Popover>
            </div>
        </div>
    )
}
