'use client'

// Next Imports
import { useParams } from 'next/navigation'
import { useTheme } from '@mui/material/styles'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'
import CustomChip from '@core/components/mui/Chip'
import { useSettings } from '@core/hooks/useSettings'
import useVerticalNav from '@menu/hooks/useVerticalNav'
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'
const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='tabler-chevron-right' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ dictionary, scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const verticalNavOptions = useVerticalNav()
  const { settings } = useSettings()
  const params = useParams()
  const { isBreakpointReached } = useVerticalNav()

  // Vars
  const { transitionDuration } = verticalNavOptions
  const { lang: locale, id } = params
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      <Menu
        popoutMenuOffset={{ mainAxis: 23 }}
        menuItemStyles={menuItemStyles(verticalNavOptions, theme, settings)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='tabler-circle text-xs' /> }}
        menuSectionStyles={menuSectionStyles(verticalNavOptions, theme)}
      >
        <SubMenu
          label={dictionary['navigation'].dashboards}
          icon={<i className='tabler-smart-home' />}
          suffix={<CustomChip label='3' size='small' color='error' round='true' />}
        >
          <MenuItem href={`/${locale}/dashboards/crm`}>{dictionary['navigation'].crm}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/analytics`}>{dictionary['navigation'].analytics}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/ecommerce`}>{dictionary['navigation'].eCommerce}</MenuItem>
          <MenuItem href={`/${locale}/dashboards/logistics`}>Logistic</MenuItem>
          <MenuItem href={`/${locale}/dashboards/academic`}>Academy</MenuItem>
          <MenuItem href={`/${locale}/dashboards/reffrels`}>Referrals</MenuItem>
          <MenuItem href={`/${locale}/dashboards/reviews`}>Reviews</MenuItem>
          <MenuItem href={`/${locale}/dashboards/roles`}>Roles</MenuItem>
          <MenuItem href={`/${locale}/dashboards/permission`}>Permission</MenuItem>
          <MenuItem href={`/${locale}/dashboards/customers`}>Customers</MenuItem>
          <MenuItem href={`/${locale}/dashboards/customersecurity`}>Customer Security</MenuItem>
          <MenuItem href={`/${locale}/dashboards/customeraddressandbilling`}>Customer Address & Billing</MenuItem>
          <MenuItem href={`/${locale}/dashboards/userProfile`}>User Profile</MenuItem>
        </SubMenu>
        <MenuSection label={dictionary['navigation'].appsPages}>
          <SubMenu label={dictionary['navigation'].rolesPermissions} icon={<i className='tabler-lock' />}>
            <MenuItem href={`/${locale}/apps/roles`}>{dictionary['navigation'].roles}</MenuItem>
            <MenuItem href={`/${locale}/apps/permissions`}>{dictionary['navigation'].permissions}</MenuItem>
          </SubMenu>
          <SubMenu label={dictionary['navigation'].pages} icon={<i className='tabler-file' />}>
            <MenuItem href={`/${locale}/pages/user-profile`}>{dictionary['navigation'].userProfile}</MenuItem>
            <MenuItem href={`/${locale}/pages/account-settings`}>{dictionary['navigation'].accountSettings}</MenuItem>
          </SubMenu>
        </MenuSection>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
