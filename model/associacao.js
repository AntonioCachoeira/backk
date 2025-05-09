const Fabricante = require('./Fabricante')
const Produto = require('./Produto')

Fabricante.hasMany(Produto,{
    foreignKey: 'fabricanteId',
    as: 'fabricante',
    onDelete: 'CASCADE'
})
Produto.belongsTo(Fabricante,{
    foreignKey: 'fabricanteId',
    as: 'fabricante',
    allowNull: false
})


module.exports = {Fabricante, Produto}