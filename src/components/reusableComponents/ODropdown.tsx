import { CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from "@coreui/react-pro";
import React from "react";

const ODropdown = (props:{
    dropSize:'sm'|'lg',
    children:React.ReactNode,
    dropDownItems:JSX.Element[],
}) => {
    return(
        <CDropdown alignment={{lg:'start',sm:'end'}}>
            <CDropdownToggle color="none" size={props.dropSize}>{props.children}</CDropdownToggle>
            <CDropdownMenu >
                {props.dropDownItems.map((item)=><CDropdownItem key={item.key}>{item}</CDropdownItem>)}
            </CDropdownMenu>
        </CDropdown>
    )
}

export default ODropdown;