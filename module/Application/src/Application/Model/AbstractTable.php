<?php
namespace Application\Model;

abstract class AbstractTable
{
    private $_name;
    /* @var \Zend\Db\TableGateway\TableGateway */
    private $_gateway;

    public function setGateway(\Zend\Db\TableGateway\TableGateway $gateway) {
        $this->_gateway = $gateway;
    }

    public function fetchAll()
    {
        $resultSet = $this->_gateway->select()->toArray();
        return $resultSet;
    }
}
