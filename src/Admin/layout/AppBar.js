import React from 'react';
import { AppBar, UserMenu, MenuItemLink, translate } from 'react-admin';
import { Typography, Button } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { withStyles } from '@material-ui/core/styles';

// import Logo from './Logo';

const styles = {
	title: {
		flex: 1,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden'
	},
	spacer: {
		flex: 1
	}
};

const CustomUserMenu = translate(({ translate, ...props }) => (
	<UserMenu {...props}>
		<MenuItemLink to="/login" primaryText={translate('login')} leftIcon={<SettingsIcon />} />
	</UserMenu>
));
// userMenu={<CustomUserMenu />}  <Logo />
const CustomAppBar = ({ classes, ...props }) => (
	<AppBar userMenu={<CustomUserMenu />} {...props}>
		<Typography variant="title" color="inherit" className={classes.title} id="react-admin-title" />

		<span className={classes.spacer} />
	</AppBar>
);

export default withStyles(styles)(CustomAppBar);
