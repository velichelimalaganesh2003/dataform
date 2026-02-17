function addAuditColumns() {
  return `
    CURRENT_TIMESTAMP() AS created_at,
    CURRENT_TIMESTAMP() AS updated_at
  `;
}

function castColumn(column_name, target_type) {
  return `CAST(${column_name} AS ${target_type})`;
}

module.exports = {
  addAuditColumns,
  castColumn
};