<?php

namespace Application\Model;

use Zend\ServiceManager\ServiceLocatorInterface;
use Zend\ServiceManager\AbstractFactoryInterface;
use Zend\Db\TableGateway\TableGateway;
use Zend\Db\ResultSet\ResultSet;


class TableFactory implements AbstractFactoryInterface
{
    /**
     * @param \Zend\ServiceManager\ServiceLocatorInterface $serviceLocator
     * @param $name
     * @param $requestedName
     * @return AbstractTable|mixed
     */
    public function createServiceWithName(ServiceLocatorInterface $serviceLocator, $name, $requestedName) {
        $dbAdapter = $serviceLocator->get('Zend\Db\Adapter\Adapter');
        $className = 'Application\\Model\\Table\\'.substr($requestedName, 6);
        /* @var AbstractTable $table*/
        $table = new $className;
        $resultSetPrototype = new ResultSet();
        //$resultSetPrototype->setArrayObjectPrototype(new Category());
        $tableGateway = new TableGateway($table::NAME, $dbAdapter, null, $resultSetPrototype);
        $table->setGateway($tableGateway);
        return $table;
    }

    /**
     * Фабрика автоматически создает объекты любых классов, находящихся в пространстве имен "Table\"
     *
     * @param \Zend\ServiceManager\ServiceLocatorInterface $serviceLocator
     * @param $name
     * @param $requestedName
     * @return bool
     */
    public function canCreateServiceWithName(ServiceLocatorInterface $serviceLocator, $name, $requestedName) {
        return substr($requestedName, 0, 6) === 'Table\\';
    }
}