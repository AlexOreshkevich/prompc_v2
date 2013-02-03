<?php
namespace Backend;

return array(
    'controllers' => array(
        'invokables' => array(
            'Backend\Controller\Index' => 'Backend\Controller\IndexController',
        ),
    ),
    'view_manager' => array(
        'template_path_stack' => array(
            'backend' => __DIR__ . '/../view',
        ),
    ),
    'asset_manager' => array(
        'resolver_configs' => array(
            'paths' => array(
                'Backend' => __DIR__ . '/../public',
            ),
        ),
    ),
    'doctrine' => array(
        'driver' => array(
            __NAMESPACE__ . '_driver' => array(
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => array(__DIR__ . '/../src/' . __NAMESPACE__ . '/Entity')
            ),
            'orm_default' => array(
                'drivers' => array(
                    __NAMESPACE__ . '\Entity' => __NAMESPACE__ . '_driver'
                )
            )
        )
    ),
    'kjsencha' => array(
        'direct' => array(
            'services' => array(
                'Direct.Tree' => 'Backend\Direct\Model\Tree',
                'Direct.Single' => 'Backend\Direct\Model\Object',
                'Direct.Collection' => 'Backend\Direct\Model\Collection',
            ),
        ),
    ),
);
