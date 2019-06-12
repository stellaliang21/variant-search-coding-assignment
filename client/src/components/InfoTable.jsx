import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const InfoTable = ({ geneInformation }) => {
  const classes = useStyles();
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>GENE</TableCell>
            <TableCell align="right">NUCLEOTIDE CHANGE</TableCell>
            <TableCell align="right">PROTEIN CHANGE</TableCell>
            <TableCell align="right">ALIAS</TableCell>
            <TableCell align="right">REGION</TableCell>
            <TableCell align="right">REPORTED CLASSIFICATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {geneInformation.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.gene}
              </TableCell>
              <TableCell align="right">{row.nucleotide_change}</TableCell>
              <TableCell align="right">{row.protein_change}</TableCell>
              <TableCell align="right">{row.alias}</TableCell>
              <TableCell align="right">{row.region}</TableCell>
              <TableCell align="right">{row.reported_classification}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default InfoTable